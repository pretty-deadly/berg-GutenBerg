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
							selected={attributes.buttonAlignment}
							onChange={(buttonAlignment) => setAttributes({ buttonAlignment })}
							options={[
								{ label: 'Align Left', value: 'left' },
								{ label: 'Align Right', value: 'right' },
							]}
						/>
					</PanelRow>
					<PanelRow>
						<RadioControl
							label="Card Layout"
							selected={attributes.layoutDirection}
							onChange={(layoutDirection) => setAttributes({ layoutDirection })}
							options={[
								{ label: 'Horizontal', value: 'horizontal' },
								{ label: 'Vertical', value: 'vertical' },
							]}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		);
	}
}
