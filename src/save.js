/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {useBlockProps, RichText} from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({attributes, setAttributes}) {
	const buttonClass = `project-link-button-${attributes.buttonAlignment}`;

	return (
		<div {...useBlockProps.save()}>
			<div className="body">
				<div className="projectPreview">
					<img src={attributes.previewIMG} alt="A preview of a portfolio project"/>
				</div>
				<div className="project-text">
					<RichText.Content className="title"
									  tagName="h5"
									  value={attributes.title}
					/>

					<RichText.Content className="description"
									  tagName="p"
									  value={attributes.description}
					/>
					<div className={buttonClass}>
						<a href={attributes.link} className="button">View Project</a>
					</div>
				</div>
			</div>

		</div>

	);
}
