import { View, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

function Card ({children}) {
    return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 6,
        //android only concept or prop for shadow
        shadowColor: 'black',
        shadowOffset: {width: 6, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 1,
        //the above 4 are for iOs only
    },
});