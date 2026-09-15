import {v7 as uuidv7, validate as uuidIsValid, version as getUuidVersion} from 'uuid';

/**
 *
 * @returns {string | Uint8Array}
 */
export const generateUUID = () => {
    return uuidv7();
}

/**
 *
 * @param uuid
 * @returns {boolean}
 */
export const isValidUUID = (uuid) => {
    return uuidIsValid(uuid) && getUuidVersion(uuid) === 7;
}