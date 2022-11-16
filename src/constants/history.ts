export const History: { [key: string]: any } = {
	navigate: null,
	push: (page: string, ...rest: any) => History.navigate(page, ...rest),
};
