import { SignUpUseCase } from "../application/useCases/SingnUpUseCase";

export function makerSignUpUseCase() {
  const SALT = 10;
  return new SignUpUseCase(SALT);
}
