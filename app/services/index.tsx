import request, { gql } from "graphql-request"

const MASTER_URL="https://api-ap-northeast-1.hygraph.com/v2/clww3t8lk068707tecynh0kjf/master";

export const getCarsList = async () => {
    const query = gql`
        query Carlists {
            carLists {
                carBrand
                carType
                createdAt
                id
                name
                price
                publishedAt
                updatedAt
                image {
                    url
                }
            }
        }
    `

    const result=await request(MASTER_URL, query);
    return result;
}

export const getStoreLocations = async() => {
    const query=gql`
    query storeLocation {
        storesLocations {
            id
            address
        }
    }  
    `

    const result = await request(MASTER_URL, query);
    return result;
}
