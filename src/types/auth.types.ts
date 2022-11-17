export type SignInPayload = {
	email: string;
	password: string;
};

export type SignUpPayload = {
	tag: string;
	email: string;
	password: string;
	repeatPassword: string;
};

export type ResponseAuthPayload = {
	id: string;
	tag: string;
	email: string;
	token: string;
};
export type User = {
	id: string;
	tag: string;
	email: string;
	avatar: null | string;
	token: string;
	streamToken: string;
};

export enum HumanSexTypes {
	Male,
	Female,
}
