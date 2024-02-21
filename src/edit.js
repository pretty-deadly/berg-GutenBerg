/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {useBlockProps, RichText, MediaUploadCheck, MediaUpload} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import {BlockSettings} from "./BlockSettings";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({attributes, setAttributes}) {
	const buttonClass = `project-link-button ${attributes.buttonAlignment}`;
	// const layoutClass = `card-layout-${attributes.layoutDirection}`;
	const divStyles = {borderColor: attributes.borderColor};

	return (
		<div { ...useBlockProps({style: divStyles}) }>
			<BlockSettings attributes = {attributes} setAttributes={setAttributes}/>
			<div className="body">

					<div className="projectPreview">
					<MediaUploadCheck>
						<MediaUpload
							allowedTypes={['images']}
							onSelect={file => {
								console.log(file);
								setAttributes({previewIMG: file.sizes.thumbnail.url})
							}}
							render={({open}) => <img src={attributes.previewIMG}
													 alt="upload a photo"
													 onClick={open}
							/>}
						/>
					</MediaUploadCheck>
					</div>

						<p>Title of Project:</p>
						<RichText className="title"
								  tagName="h5"
								  placeholder="A Cool Project"
								  value={attributes.title}
								  onChange={(title) => setAttributes({title})}
						/>
						<p>Description of Project:</p>
						<RichText className="description"
								  tagName="p"
								  placeholder="This a description of my project and the tools I used to make it, including frameworks."
								  value={attributes.description}
								  onChange={(description) => setAttributes({description})}
						/>
						<p>Project Link:</p>

					<div className={buttonClass}>
						<RichText className="link"
								  tagName="a"
								  placeholder="reallycoolproject.com"
								  value={attributes.link}
								  onChange={(link) => setAttributes({link})}

								  />
					</div>

			</div>
		</div>
	);
}
