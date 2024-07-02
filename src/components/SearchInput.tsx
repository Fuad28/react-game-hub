import { FormEvent, useRef } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface Props {
	onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
	const ref = useRef<HTMLInputElement>(null);

	const onSubmit = (event: FormEvent) => {
		event.preventDefault();
		if (ref.current) onSearch(ref.current.value);
	};

	return (
		<form onSubmit={onSubmit}>
			<InputGroup>
				<InputLeftElement children={<BsSearch />} />
				<Input
					ref={ref}
					borderRadius={20}
					placeholder="Search games..."
					variant="filled"></Input>
				;
			</InputGroup>
		</form>
	);
};

export default SearchInput;
