import { SignInController } from "../application/controllers/SignInController";
import { makerSingnInUseCase } from "./makerSingnInUseCase";

export function makerSignInController() {
  const signInUseCase = makerSingnInUseCase()
  return new SignInController(signInUseCase)
}
