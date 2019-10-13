export const LOCAL_STORAGE = {
    AUTH_TOKEN: "auth_token",
    AUTH_TOKEN_EXPIRES_AT: "token_expires_at",
};

export function createKey(input) {
    return input ? input.replace(/^(the|a|an)/, '').replace(/\s/g, '') : input;
}
