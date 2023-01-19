import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { Box, Image } from 'native-base';
import { Dimensions } from 'react-native';

const Carrusel = ()=> {
    const colors = ['tomato', 'thistle', 'skyblue', '#00ff00'];
    return(
        <SwiperFlatList
              autoplay
              autoplayDelay={3}
              autoplayLoop
              index={2}
              showPagination
              data={colors}
              renderItem={({ item }) => (
                <Box bg={item} w={Dimensions.get('window').width} > 
                   <Image source={require("../img/banner1.png")} 
                     alt={item} h={200} w={(Dimensions.get('window').width)-20} resizeMode="stretch" />
                </Box>
              )}
            />
    )
}
export default Carrusel;