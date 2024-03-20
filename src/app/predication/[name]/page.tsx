
import React from 'react'

interface Params {
    params: { name: String }
}

const GetPredicatedGender = async (name: String) => {
    const res = await fetch(`https://api.genderize.io/?name=${name}`)
    return res.json()
}

const GetPredicatedNation = async (name: String) => {
    const res = await fetch(`https://api.nationalize.io/?name=${name}`)
    return res.json()
}


const GetPredicatedage = async (name: String) => {
    const res = await fetch(`https://api.agify.io/?name=${name}`)
    return res.json()
}



const Predication = async ({ params }: Params) => {
    const ageData = await GetPredicatedage(params.name)
    const nationData = await GetPredicatedNation(params.name)
    const genderData = await GetPredicatedGender(params.name)

    const [age, nation, gender] = await Promise.all([ageData, nationData, genderData])
    return (
        <>
            <div className='container-fluid'>
                <div className='card mt-5 py-5 px-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                    <div className="card-body">
                        <h2 className="card-title">Personal Details</h2>
                        <p className="card-text">Age - {age?.age}</p>
                        <p className="card-text">Gender - {gender?.gender}</p>
                        <p className="card-text">Nation - {nation?.country[0].country_id}</p>
                    </div>
                </div>
            </div>
        </>
    )
}





export default Predication