import React from "react";
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, PanelRow, ColorPalette, RadioControl } from "@wordpress/components";

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
					<PanelRow>
						Border Color
					</PanelRow>
					<PanelRow>
						<ColorPalette

							colors={[
								{name: 'maroon', color: '#800000FF'},
								{name: 'black', color: '#000000'},
								{name: 'dark-grey', color: '#818181'}
							]}
							value={attributes.borderColor}
							onChange={borderColor => setAttributes({borderColor})}
							disableCustomColors={true}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		);
	}
}
