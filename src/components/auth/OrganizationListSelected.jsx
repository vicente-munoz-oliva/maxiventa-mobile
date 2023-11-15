import { View } from "react-native"
import { ListItem } from "react-native-elements"

export default function OrganizationListSelected({
    handleSignIn,
    orgs
}) {

    return (
        <View style={{ marginTop: 50}} >
            {orgs.map(org => (
                <ListItem
                    onPress={async () => {
                        await handleSignIn({ orgId: org.orgId })
                    }}
                    bottomDivider
                    key={org.orgId}
                >
                    <ListItem.Content>
                        <ListItem.Title
                        >{org.name}</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            ))}
        </View>
    )
}