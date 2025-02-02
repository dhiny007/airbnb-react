import styles from './PlacesHeader.module.scss';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import PoolIcon from '@mui/icons-material/Pool';
import DeckIcon from '@mui/icons-material/Deck';
import HiveIcon from '@mui/icons-material/Hive';
import CoffeeIcon from '@mui/icons-material/Coffee';
import LandscapeIcon from '@mui/icons-material/Landscape';
import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';

const iconMap = {
    AgricultureIcon: <AgricultureIcon />,
    LocalActivityIcon: <LocalActivityIcon />,
    PoolIcon: <PoolIcon />,
    DeckIcon: <DeckIcon />,
    HiveIcon: <HiveIcon />,
    CoffeeIcon: <CoffeeIcon />,
    LandscapeIcon: <LandscapeIcon />
}

const PlacesHeader = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const placesList = [{
        name:'Farms',
        icon: 'AgricultureIcon'
    }, {
        name: 'Icons',
        icon:'LocalActivityIcon'
    }, {
        name: 'Amazing Pools',
        icon: 'PoolIcon'
    }, {
        name: 'BeachFront',
        icon: 'DeckIcon'
    }, {
        name: 'Vineyards',
        icon: 'HiveIcon'
    }, {
        name: 'Bed & Breakfasts',
        icon: 'CoffeeIcon'
    }, {
        name: 'Amazing Views',
        icon: 'LandscapeIcon'
    }]

    const handleTabChange = (event,newValue) => {
        console.log('new value incoming',newValue);
        console.log('whats event', event);
        setSelectedTab(newValue);
    }

    return (
        <>
            <div className={styles.placesHeader}>
            <Tabs value={selectedTab} onChange={handleTabChange} aria-label="basic tabs example">
                {placesList.map((place) => (
                    // <div key = {place.name} className={styles.placeItem}>
                    //     {iconMap[place.icon]}
                    //     <p>{place.name}</p>
                    // </div>
                    
                        <Tab key={place.name} label={place.name} icon={iconMap[place.icon]} disableRipple sx={{
                            "&:focus": { outline: "none" } // Ensures no focus outline
                        }}/>
                        // <Tab label="Item Two" {...a11yProps(1)} />
                        // <Tab label="Item Three" {...a11yProps(2)} />
                ))}
                    </Tabs>
            </div>
        </>
    )
}

export default PlacesHeader;