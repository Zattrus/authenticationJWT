import { SignUpController } from "../application/controllers/SignUpController";
import { makerSignUpUseCase } from "./makerSignUpUseCase";

export function makerSignUpController() {
  const signUpUseCase = makerSignUpUseCase()

  return new SignUpController(signUpUseCase);
}
