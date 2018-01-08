cd /opt/code/EsyCation/ 
echo "Pull update from GIT ? [Y,n] "
read input
if [[ $input == "Y" || $input == "y" ]]; then
    echo " ******************************************** Pulling Update From GIT *********************************************** "
    git reset --hard HEAD && git pull 
	CmdExit=$?
    if [ "$CmdExit" = 0 ]; then
        echo "Code updated successfully .......... "
    else
	    echo "Error occurred while update .........."
	    echo "Dropping whole script. Please run again.." && exit 1
	fi
else
    echo "GIT Update skipped ........."
fi

echo "Please select the modules to be build, Use ',' to specify multiple modules "
echo "Available Modules are :- "
echo " "
echo "  Infrastructure Services:-"
echo "      esycation-service-discovery-server"
echo "      esycation-config-server"
echo " "
echo "  Endpoint Services:-"
echo "      esycation-ui"
echo "      esycation-apigateway"
echo " "
echo "  Business Services:-"
echo "      admin-service"
echo "      attendance-service"
echo "      cms-service"
echo "      fee-service"
echo "      hostel-service"
echo "      inventory-service"
echo "      notification-service"
echo "      result-service"
echo "      school-service"
echo "      staff-service"
echo "      student-service"
echo " "
echo " All to build all the services."
read modules


echo "Please enter profiles, Use ',' to specify multiple profiles"
read profiles

if [[ $modules == "ALL" || $modules == "all" ]]; then
    modules=esycation-service-discovery-server,esycation-config-server,esycation-ui,esycation-apigateway,admin-service,attendance-service,cms-service,fee-service,hostel-service,inventory-service,notification-service,result-service,school-service,staff-service,student-service
fi

export GRADLE_OPTS=-Xmx2048m

echo "Following modules will be build :- "
echo  $modules;

echo " "
echo " "


echo "Bulding common."
gradle :esycation-common:build
CmdExit=$?

if [ "$CmdExit" == 0 ]; then
        echo "common build success .........."
    else
        echo "Failed build the service .........."
        echo "Dropping whole script. Please run again.." && exit 1
fi


for module in $(echo $modules | sed "s/,/ /g")
    do
        clean_command=""
        if [[ $module == *"esycation"* ]]; then
            clean_command=" :$module:build"
        else
            clean_command=" :esycation-service:$module:build"
        fi
        gradle $clean_command
    done


echo "Moving to build directory "
cd /opt/code/EsyCation/build

for module in $(echo $modules | sed "s/,/ /g")
    do
        pkill java -jar $module
        nohup java -jar $module-1.0.jar --profile=$profiles &
        echo "nohup java -jar $module-1.0.jar --profile=$profiles &"
        sleep 20
    done

