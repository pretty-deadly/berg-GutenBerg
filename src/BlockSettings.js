import React from "react";
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, PanelRow, RadioControl } from "@wordpress/components";

export class BlockSettings extends React.Component {
	render() {
		const { attributes, setAttributes } = this.props;

		return (
			<InspectorControls>
				<PanelBody title="Basic" initialOpen={true}>
					<PanelRow>
						<RadioControl
							label="Button Alignment"
							selected={attributes.buttonAlignment} // Use the selected attribute
							onChange={(buttonAlignment) => setAttributes({ buttonAlignment })} // Update the attribute when changed
							options={[
								{ label: 'Align Left', value: 'left' },
								{ label: 'Align Right', value: 'right' },
							]}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		);
	}
}
