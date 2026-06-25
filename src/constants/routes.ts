export const APP_BASE_PATH = "/movie-page";

export const ROUTE_SEGMENTS = {
    favorite: "favorite",
    signIn: "sign-in",
    signUp: "sign-up",
    forgotPassword: "forgot-password",
} as const; // readonly for these fields

export const ROUTES = {
    home: APP_BASE_PATH,
    favorite: `${APP_BASE_PATH}/${ROUTE_SEGMENTS.favorite}`,
    signIn: `${APP_BASE_PATH}/${ROUTE_SEGMENTS.signIn}`,
    signUp: `${APP_BASE_PATH}/${ROUTE_SEGMENTS.signUp}`,
    forgotPassword: `${APP_BASE_PATH}/${ROUTE_SEGMENTS.forgotPassword}`,
} as const;
