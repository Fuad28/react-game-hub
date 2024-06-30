import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
const ColotModeSwitch = () => {
	const { toggleColorMode, colorMode } = useColorMode();
	return (
		<div>
			<HStack>
				<Switch
					colorScheme="green"
					isChecked={colorMode === "dark"}
					onChange={toggleColorMode}
				/>
				<Text>Dark mode</Text>
			</HStack>
		</div>
	);
};

export default ColotModeSwitch;
