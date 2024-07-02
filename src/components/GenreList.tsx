import { Heading, List, ListItem, HStack, Button, Image, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { Genre } from "../hooks/useGenres";

interface Props {
	selectedGenre: Genre | null;
	onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
	const { data, isLoading, error } = useGenres();

	if (error) return null;
	if (isLoading) return <Spinner />;
	return (
		<>
			<Heading fontSize="2xl" marginBottom={3}>
				Genres
			</Heading>
			<List>
				{data.map((genre) => (
					<ListItem key={genre.id} paddingY={2}>
						<HStack>
							<Image
								boxSize="32px"
								objectFit="cover"
								src={getCroppedImageUrl(genre.image_background)}
								borderRadius={8}
							/>
							<Button
								fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
								fontSize="lg"
								variant="link"
								whiteSpace="normal"
								textAlign="left"
								onClick={() => onSelectGenre(genre)}>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;
