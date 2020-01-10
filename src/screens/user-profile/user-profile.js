import React from 'react';
import {ScrollView} from 'react-native';
import {Avatar, Text, Layout, Button, TopNavigation, Icon, List, Card } from '@ui-kitten/components';

function UserProfile({name, profilePicture, location, followers, following, posts, likes, about}) {
	return (
		<ScrollView>
		<Layout>

			<TopNavigation
				title='User Profile'
				alignment='center'
			/>
			<Layout>
				<Avatar 
					shape='round' 
					style={{width: 160, height: 160, margin: 16, alignSelf: 'center'}}
					source={{uri: profilePicture}}

				/>
				<Text category="h5" style={{textAlign: 'center'}}>{name}</Text>
				<Layout style={{flexDirection: 'row', justifyContent: 'center'}}>
					<Icon name='pin-outline' style={{marginTop: 5}} width={15} height={15} />
					<Text category="s1">{location}</Text>
				</Layout>
				<Layout style={{flexDirection: 'row', marginVertical: 32, justifyContent: 'center'}}>
					<Button appearance='filled' icon={style => <Icon {...style} name='person-add'/>}>FOLLOW</Button>
					<Button appearance='outline' style={{marginLeft: 16, backgroundColor: "white",borderWidth: 0}} icon={style => <Icon {...style} name='message-circle'/>}>MESSAGE</Button>
				</Layout>

				<Layout style={{flexDirection: 'row', justifyContent: 'space-around'}}>
					<Layout style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
						<Text>{followers}</Text>
						<Text>Followers</Text>
					</Layout>
					<Layout style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
						<Text>{following}</Text>
						<Text>Following</Text>
					</Layout>
					<Layout style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
						<Text>{posts}</Text>
						<Text>Posts</Text>
					</Layout>
					<Layout style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
						<Text>{likes}</Text>
						<Text>Likes</Text>
					</Layout>
				</Layout>
			</Layout>
			<Layout style={{paddingHorizontal: 16, paddingTop: 16}}>
				<Text category="s1">About</Text>
				<Text category="p2" style={{opacity: 0.6, marginTop: 8}}>{about}</Text>
			</Layout>
			<Layout style={{paddingHorizontal: 16, paddingTop: 16}}>
				<Text category="s1">Posts</Text>
				<Text category="p2" style={{opacity: 0.6, marginTop: 8}}>posts</Text>
			</Layout>
		</Layout>
		</ScrollView>
	);
};

UserProfile.defaultProps = {
	name: 'Donald Trump',
	profilePicture: 'https://images.wsj.net/im-119693?width=620&size=1.5',
	location: 'Bratislava',
	followers: 200,
	following: 121,
	posts: 5,
	likes: 40,
	about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae eos esse, eveniet deleniti aut, adipisci tenetur est ipsa tempore deserunt enim animi aliquam maiores aspernatur commodi, odit quo natus accusamus. ipsum dolor sit amet, consectetur adipisicing elit. Illo est repellat nostrum facere explicabo non esse eum provident reprehenderit animi, qui officiis ipsam aliquid, vero optio iusto. Soluta, velit, ea. ipsum dolor sit amet, consectetur adipisicing elit. In sequi maxime dolorum, quo ratione omnis commodi facilis obcaecati nam, dolor esse ducimus beatae expedita assumenda nostrum excepturi quam. Beatae, inventore! ipsum dolor sit amet, consectetur adipisicing elit. Eos dolorem repellendus aliquam doloribus eaque in inventore facilis quis voluptate illum, quam labore molestiae. Ipsa quod perspiciatis maiores assumenda voluptates provident!'
};

export default UserProfile;