const prefix = name => `vizhub-ui/editor/${name}`;

export const INIT_FILES = prefix('INIT_FILES');
export const CHANGE_FILE_TEXT = prefix('CHANGE_ACTIVE_FILE_TEXT');
export const SET_ACTIVE_FILE = prefix('SET_ACTIVE_FILE');
export const RUN_FILES = prefix('RUN_FILES');
export const SAVE = prefix('SAVE');
export const SAVE_SUCCESS = prefix('SAVE_SUCCESS');
export const SAVE_ERROR = prefix('SAVE_ERROR');
export const SET_VISUALIZATION_WIDTH = prefix('SET_VISUALIZATION_WIDTH');
export const SET_VISUALIZATION_HEIGHT = prefix('SET_VISUALIZATION_HEIGHT');
export const BUILD_FINISHED = prefix('BUILD_FINISHED');
export const CREATE_NEW_FILE = prefix('CREATE_NEW_FILE');
export const NEW_FILE_CREATED = prefix('NEW_FILE_CREATED');
export const RENAME_FILE = prefix('RENAME_FILE');
export const FILE_RENAMED = prefix('FILE_RENAMED');
export const DELETE_FILE = prefix('DELETE_FILE');
export const FILE_DELETED = prefix('FILE_DELETED');
