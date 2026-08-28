/**
 * The longest username GitHub allows.
 * Kept next to the validator so the test and the UI copy cannot drift apart.
 */
export const USERNAME_MAX_LENGTH = 39

/**
 * Shown when the input does not describe a username GitHub could own.
 * A single sentence covers every rule, so the user is not walked through
 * the rules one rejection at a time.
 */
export const USERNAME_ERROR_MESSAGE =
  'Usernames may only contain letters, numbers, and single hyphens (max 39 characters).'

/**
 * Answers whether GitHub could own this username, so an input that can only
 * ever 404 never reaches the API.
 *
 * GitHub's rules: letters, digits and hyphens only; no leading or trailing
 * hyphen; no two hyphens in a row; 1 to 39 characters.
 *
 * @param name the raw input, already trimmed by the caller
 */
export const isValidUsername = (name: string): boolean => {
  return (
    name.length > 0 &&
    name.length <= USERNAME_MAX_LENGTH &&
    /^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/.test(name)
  )
}
