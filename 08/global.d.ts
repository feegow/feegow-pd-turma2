import { Secret } from "jsonwebtoken";

declare global{
    namespace NodeJS {
        interface ProcessEnv{
            SECRET: Secret
        }
    }
}