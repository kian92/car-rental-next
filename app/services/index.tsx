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

export const createBooking = async(formValue:any) => {
    const mutationQuery = gql`
    mutation MyMutation {
      createBooking(
        data:  {userName: "`+formValue.userName+`", 
        pickUpDate: "`+formValue.pickUpDate+`", 
        pickUpTime: "`+formValue.pickUpTime+`", 
        dropOffDate: "`+formValue.dropOffDate+`", 
        dropOffTime: "`+formValue.dropOffTime+`", 
        contactNumber: "`+formValue.contactNumber+`", 
        carId: {connect: 
          {id: "`+formValue.carId+`"}}}
      ) {
        id
      }
    }
    `

    const result = await request(MASTER_URL, mutationQuery);
    return result;
}
