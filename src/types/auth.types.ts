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

export enum HumanSexTypes {
	Male,
	Female,
}
