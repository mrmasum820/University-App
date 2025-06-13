import { TBasicViewProps } from "@/common";
import { Button, Card, FormTextField, Grid } from "@/uikit/ui";
import Image from "next/image";
import { LoginSchemaType } from "./login.model";

type ILoginViewProps = {
  isPending?: boolean;
  error?: string;
} & TBasicViewProps<LoginSchemaType>;

export default function LoginView({ isPending }: ILoginViewProps) {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card className="flex w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden mx-4 md:mx-0">
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
          <Image
            src={"/assets/logo.png"}
            width={300}
            height={150}
            alt={"Login"}
            className="mx-auto"
          />
          {/* <p className="bg-gray-300 text-center border border-gray-400 p-8 mb-6">
            Company Logo
          </p> */}
          <Grid className="mt-5">
            <Grid.Col>
              <FormTextField<LoginSchemaType>
                type="text"
                name="username"
                placeholder="username"
              />
            </Grid.Col>
            <Grid.Col>
              <FormTextField<LoginSchemaType>
                type="password"
                name="password"
                placeholder="Password"
              />
            </Grid.Col>
            <Grid.Col>
              <Button
                type="submit"
                className="w-full"
                variant="gradient"
                disabled={isPending}
                loading={isPending}
              >
                Login
              </Button>
            </Grid.Col>
          </Grid>
        </div>
        <div className="w-full md:w-1/2 items-center justify-center bg-gray-200 p-6 hidden sm:block">
          <div>
            <Image
              src={"/assets/login.jpg"}
              width={400}
              height={400}
              alt={"Login"}
            />
            <p className="text-center mt-2">Manage Your agency</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
