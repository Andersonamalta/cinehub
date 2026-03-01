import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="grid h-full grid-cols-2 bg-black">
      {/* Div Formulario*/}
      <div>
        <h1 className="text-primary-color p-6 font-[Poppins] text-5xl font-bold">
          CineHub
        </h1>
        <div className="flex flex-col items-center justify-center">
          <Card className="border-none bg-black">
            <CardHeader className="text-primary-color w-125 justify-center font-[Poppins] text-3xl font-bold">
              Crie sua conta
            </CardHeader>
            <CardContent className="space-y-4">
              <Label className="text-color-text font-[Nunito] text-sm">
                Nome
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Digite seu nome"
                required
                className="text-color-text border-none p-6"
              />

              <Label className="text-color-text font-[Nunito] text-sm">
                E-mail
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
                required
                className="text-color-text border-none p-6"
              />

              <Label className="text-color-text font-[Nunito] text-sm">
                Senha
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                required
                className="text-color-text border-none p-6"
              />
              <Label className="text-color-text font-[Nunito] text-sm">
                Confirmar senha
              </Label>
              <Input
                id="passwordConfirmation"
                type="password"
                placeholder="Digite sua senha"
                required
                className="text-color-text border-none p-6"
              />
            </CardContent>
            <CardFooter className="mt-4">
              <Button className="bg-primary-color text-color-text w-full cursor-pointer rounded-[10px] p-6 font-[Nunito] text-xl">
                Criar conta
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-color-text text-center opacity-50">
            Já possui conta?
          </p>
          <Button variant="link">
            <Link to="/login" className="text-color-text">
              Faça login
            </Link>
          </Button>
        </div>
      </div>
      {/* Div imagem */}
      <div className="h-screen">
        <img
          src="/images/background_signup.jpg"
          className="h-full w-full object-fill"
        />
      </div>
    </div>
  )
}

export default Signup
