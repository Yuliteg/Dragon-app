import React, { useState, useContext, useEffect } from 'react';

const infoUrl = 'https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f';
export const galleryUrl = 'https://api.spacexdata.com/v4/dragons';
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [rocket, setRocketData] = useState([]);
    const [dataGallery, setDataGallery] = useState([]);
    const [count, setCount] = useState(0)

    const fetchInfo = async () => {
            setLoading(true)
            const response = await fetch(infoUrl);
            const data = await response.json();
            window.localStorage.setItem('localData', JSON.stringify(data))
            setRocketData(data)
            setLoading(false)
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
        <AppContext.Provider value={{ loading, setLoading, rocket, dataGallery, count, setCount }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppContext, AppProvider }