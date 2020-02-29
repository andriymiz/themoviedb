/**
 * Check if the given value is an object.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is an object, else `false`.
 */
export function isObject(value) {
  return typeof value === "object" && value !== null;
}

/**
 * Extend the given object.
 * @param {*} obj - The object to be extended.
 * @param {*} args - The rest objects which will be merged to the first object.
 * @returns {Object} The extended object.
 */
export const assign =
  Object.assign ||
  function assign(obj, ...args) {
    if (isObject(obj) && args.length > 0) {
      args.forEach(arg => {
        if (isObject(arg)) {
          Object.keys(arg).forEach(key => {
            obj[key] = arg[key];
          });
        }
      });
    }

    return obj;
  };

/**
 * Create oAuth modal window
 *
 * @param {string} url - Required
 * @param {string} [name="Authorization"]
 * @param {number} [width=500]
 * @param {number} [height=600]
 * @param {number} [left=0]
 * @param {number} [top=0]
 * @returns {Window}
 */
export const createOauthWindow = (
  url,
  name = "Authorization",
  width = 500,
  height = 600,
  left = 0,
  top = 0
) => {
  if (url == null) return null;
  const options = `width=${width},height=${height},left=${left},top=${top}`;
  return window.open(url, name, options);
};
