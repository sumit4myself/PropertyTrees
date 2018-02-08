package com.propertiestree.admin.utils;

import org.apache.commons.io.filefilter.PrefixFileFilter;
import org.apache.commons.lang3.ArrayUtils;

import java.io.File;
import java.util.ArrayList;
import java.util.Collection;

public class FilenameUtils extends org.apache.commons.io.FilenameUtils {

    public static String getUniqueDirName(File dir, String name) {
        return getUniqueName(dir, name, true);
    }

    public static String getUniqueFileName(File dir, String name) {
        return getUniqueName(dir, name, false);
    }

    public static String buildPath(String... dirs) {
        StringBuilder strB = new StringBuilder();
        for (int i = 0; i < dirs.length; i++) {
            if (i != 0 && !(strB.charAt(strB.length() - 1) == File.separatorChar || dirs[i].startsWith(File.separator))) {
                strB.append(File.separatorChar);
            }
            strB.append(dirs[i]);
        }
        return strB.toString();
    }

    public static String getDirStructure(String uuid, int dirDepth, int dirNameLenght) {
        int depth = dirNameLenght * dirDepth;
        StringBuilder strB = new StringBuilder(getString(uuid, depth));
        for (int i = dirNameLenght; i < depth + dirDepth - 1; i += dirNameLenght + 1) {
            strB.insert(i, File.separatorChar);
        }
        strB.append(File.separatorChar).append(uuid);
        return strB.toString();
    }

    public static String getString(String uuid, int lenght) {
        StringBuilder strB = new StringBuilder(uuid);
        int actualLenght = strB.length();
        if (actualLenght > lenght) {
            return strB.substring(actualLenght - lenght, actualLenght);
        }
        for (int i = 0; i < lenght - actualLenght; i++) {
            strB.insert(0, '0');
        }
        return strB.toString();
    }

    protected static String getUniqueName(File dir, String name, boolean isDir) {
        if (dir.isDirectory()) {
            String[] filenames = dir.list(new PrefixFileFilter(name));
            if (filenames.length > 0) {
                filenames = getFilenames(getDirsOrFiles(dir, filenames, isDir));
                if (filenames.length > 0) {
                    String candidate;
                    for (int i = 0; true; i++) {
                        candidate = getCandidateName(name, i, isDir);
                        if (!ArrayUtils.contains(filenames, candidate)) {
                            return candidate;
                        }
                    }
                }
            }
            return name;
        } else {
            throw new IllegalArgumentException("It is not a directory: " + dir + ".");
        }
    }

    private static String getCandidateName(String filename, int i, boolean isDir) {
        if (isDir) {
            return filename + i;
        } else {
            return getBaseName(filename) + i + EXTENSION_SEPARATOR + getExtension(filename);
        }
    }

    public static String[] getFilenames(File[] files) {
        String[] filenames = new String[files.length];
        for (int i = 0; i < filenames.length; i++) {
            filenames[i] = files[i].getName();
        }
        return filenames;
    }

    public static File[] getFiles(File dir, String[] filenames) {
        File[] files = new File[filenames.length];
        for (int i = 0; i < filenames.length; i++) {
            if (dir != null) {
                files[i] = new File(dir, filenames[i]);
            } else {
                files[i] = new File(filenames[i]);
            }
        }
        return files;
    }

    protected static File[] getDirsOrFiles(File dir, String[] filenames, boolean dirs) {
        Collection<File> result = new ArrayList<File>();
        File[] files = getFiles(dir, filenames);
        for (int i = 0; i < files.length; i++) {
            if (!files[i].isDirectory() ^ dirs) {
                result.add(files[i]);
            }
        }
        return result.toArray(new File[result.size()]);
    }

    public static String convertFilenameToSystemFriendly(String filename) {
        return filename.replaceAll("[^A-Za-z0-9\\.]", "_");
    }
}
