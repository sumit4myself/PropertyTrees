@echo off
@rem ##########################################################################
@rem
@rem  Startup script EsyKart for Windows
@rem
@rem ##########################################################################

if "%OS%" == "Windows_NT" setlocal

set ESYKART_BUILD_PROFILE=dev-embedded

cd ..
set "ESYKART_ROOT_DIR=%cd%"
set "EXECUTABLE=%ESYKART_ROOT_DIR%\gradlew.bat"

rem Check that target executable exists
if exist "%EXECUTABLE%" goto okExec
echo Cannot find "%EXECUTABLE%"
echo This file is needed to run this program
goto end
:okExec

rem Get remaining unshifted command line arguments and save them in the
set CMD_LINE_ARGS=
:setArgs
if ""%1""=="""" goto doneSetArgs
set CMD_LINE_ARGS=%CMD_LINE_ARGS% %1
shift
goto setArgs
:doneSetArgs

call "%EXECUTABLE%" runAllServices %CMD_LINE_ARGS% --info

:end
