import { QueryClient } from "@tanstack/react-query";
export function refetchFn(client: QueryClient, key:string){
    return client.invalidateQueries({ queryKey: [key] })
}