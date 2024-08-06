import { Amplify } from "aws-amplify"

export function initAmplify() {
    Amplify.configure({
        Auth:{
            Cognito:{
                userPoolClientId: "10rked9029u3u0s32db6ilgsh0",
                userPoolId: "us-east-1_2DLkGjYgv",
            }   
        }
    })
}