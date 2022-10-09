import React, { useState, useContext, useEffect } from 'react';


const infoUrl = 'https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f';
export const galleryUrl = 'https://api.spacexdata.com/v4/dragons';
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [space, setSpaceData] = useState([]);
    const [images, setImages] = useState([]);
    const [height, setHeight] = useState([]);
    const [diameter, setDiameter] = useState([]);
    const [launchMass, setLaunchMass] = useState([]);
    const [returnMass, setReturnMass] = useState([]);
    const [dataGallery, setDataGallery] = useState([]);
    const [count, setCount] = useState(0)

    const fetchInfo = async () => {
        setLoading(false)
        if (localStorage.getItem('localData') !== null) {
            const localStorage = window.localStorage.getItem('localData')
            const localStorageData = JSON.parse(localStorage)
            setSpaceData(localStorageData)
            setImages(localStorageData.flickr_images)
            setHeight(localStorageData.height_w_trunk)
            setDiameter(localStorageData.diameter)
            setLaunchMass(localStorageData.launch_payload_mass)
            setReturnMass(localStorageData.return_payload_mass)
        } else {
            setLoading(true)
            const response = await fetch(infoUrl);
            const data = await response.json();
            window.localStorage.setItem('localData', JSON.stringify(data))
            setSpaceData(data)
            setImages(data.flickr_images)
            setHeight(data.height_w_trunk)
            setDiameter(data.diameter)
            setLaunchMass(data.launch_payload_mass)
            setReturnMass(data.return_payload_mass)
            setTimeout(() => {
                setLoading(false)
            }, 1000)
        }
    }

    const fetchGallery = async () => {
      const response = await fetch(galleryUrl)
      const responseData = await response.json()

      const dataGallery = responseData.map((item) => {
        const {flickr_images, id, name, description} = item
        const galaryItem = {
          flickr_images: flickr_images,
          name: name,
          description: description,
          id: id,
          favorite: false
       }
       return galaryItem
      })
      setDataGallery(dataGallery)
    }

    useEffect(() => {
        fetchInfo()
        fetchGallery()
    }, [])

    return (
        <AppContext.Provider value={{ loading, setLoading, space, images, height, diameter, launchMass, returnMass, dataGallery, count, setCount }}>
            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppContext, AppProvider }