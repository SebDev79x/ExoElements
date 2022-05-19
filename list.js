import { ListItem, Avatar } from '@rneui/themed'
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

const list = [
    {
        name: 'Sébastien',
        avatar_url: 'https://cdn.icon-icons.com/icons2/318/PNG/512/Darth-Vader-icon_34501.png',
        subtitle: 'Appli Mobile Etoile de la Mort'
    },
    {
        name: 'Damien1',
        avatar_url: 'https://cdn.icon-icons.com/icons2/1359/PNG/512/darthvader_88871.png',
        subtitle: 'Appli Mobile Etoile de la Mort'
    },
    {
        name: 'Damien2',
        avatar_url: 'https://cdn.icon-icons.com/icons2/1390/PNG/512/darthvader_96170.png',
        subtitle: 'Appli Mobile Etoile de la Mort'
    },
    {
        name: 'zoo',
        avatar_url: 'https://cdn.icon-icons.com/icons2/1390/PNG/512/darthvader_96170.png',
        subtitle: 'Appli Mobile Etoile de la Mort'
    }
]
const search = (word) =>{
    return list.filter((e)=>e.name !== word)
}
console.log(search('Damien2'))
const listStudents = () => {
    return (
        <View>
            <View>{
                list.map((el, i) => (
                    <ListItem key={i} bottomDivider>
                        <Avatar source={{ uri: el.avatar_url }} />
                        <ListItem.Content>
                            <ListItem.Title>{el.name}</ListItem.Title>
                            <ListItem.Subtitle>{el.subtitle}</ListItem.Subtitle>
                        </ListItem.Content>
                        <Icon
                     color="#0CC"
                     containerStyle={{}}
                     disabledStyle={{}}
                     iconProps={{}}
                     iconStyle={{}}
                     name="arrow-right"
                     onLongPress={() => console.log("onLongPress()")}
                     onPress={() => console.log("onPress()")}
                     size={40}
                     type="entypo" />
                    </ListItem>
                ))
            }
            </View>
           



        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }/* ,
    disposition: {
        flexDirection: 'row',

    },
    items: {
        flexDirection: 'column',

    } */
});

export default listStudents