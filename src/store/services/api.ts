import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Restaurante } from "../../Components/Home";

export type PurchasePayload = {
    products: {
        id: number
        price: number
        }[],
    delivery: {
        receiver: string
        address: {
            description: string
            city: string
            zipCode: string
            number: string
            complement: string
        }
    },
    payment: {
        card: {
            name: string
            number: string
            code: string
            expires: {
                month: string,
                year: string
            }
        }
    }
}

const api = createApi({
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://api-ebac.vercel.app/api/efood/'
        }),
        endpoints: (builder) => ({
            getRestaurants: builder.query<Restaurante[], void>({
            query: () => 'restaurantes'
            }),
            purchase: builder.mutation<any, PurchasePayload>({
                query: (body: any) => ({
                    url: 'checkout',
                    method: 'POST',
                    body
                })
            })
        })
    })

export const { useGetRestaurantsQuery, usePurchaseMutation } = api

export default api