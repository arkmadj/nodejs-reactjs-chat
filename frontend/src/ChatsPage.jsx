import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
	return (
		<div style={{ height: "100vh" }}>
			<PrettyChatWindow
				projectId="6149f6ab-a5c7-4808-ae52-0fa7a5e96f2c"
				username={props.user.username}
				secret={props.user.secret}
				style={{ height: "100%" }}
			/>
		</div>
	);
};

export default ChatsPage;
