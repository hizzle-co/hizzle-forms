import { useState } from "@wordpress/element";

/**
 * Returns a bootstrap input field.
 *
 * @param {Object} props
 * @param {String} props.id
 * @param {String} props.type
 * @param {String} props.label
 * @param {String} props.value
 * @param {Function} props.onChange
 * @param {Function} props.blurChange
 * @param {String} props.placeholder
 * @param {String} props.className
 * @param {String} props.help
 * @param {String} prepend
 * @param {String} append
 * @param {Boolean} readOnly
 * @param {Boolean} isHorizontal
 * @return {JSX.Element} Input field.
 */
export default function Input({ type, label, value, onChange, blurChange, placeholder, className, help, prepend, append, id, readOnly, isHorizontal }) {

	label = label || '';
	id = id || ( `hizzle-pay-${label.toLowerCase().replace(' ', '-')}` );
	type = type || 'text';
	onChange = onChange || (() => {});
	blurChange = blurChange || (() => {});
	readOnly = readOnly || false;
	className = className || '';

	if ( isHorizontal ) {
		className += ' hpay-form-control-horizontal';
	}

	const [inputValue, setInputValue] = useState(null === value ? '' : value);

	/**
	 * Handles the change event.
	 * @param {Event} event
	 */
	const handleChange = (event) => {
		setInputValue(event.target.value);
		onChange(event.target.value);
	};

	/**
	 * Handles the blur event.
	 * @param {Event} event
	 */
	const handleBlur = (event) => {
		blurChange(inputValue);
	};

	return (
		<div className={`hpay-form-group ${className}`} id={`${id}__wrapper`}>

			{ label && <label htmlFor={id} className="hpay-form-label">{label}</label> }

			<div className="hpay-form-field">
				<div className={( prepend || append ) ? 'hpay-input-group' : ''}>
					{prepend && <span className="hpay-input-group-text">{prepend}</span>}
					<input
						type={type}
						className="hpay-form-control"
						id={id}
						value={inputValue}
						onChange={handleChange}
						onBlur={handleBlur}
						placeholder={placeholder}
						readOnly={readOnly}
					/>
					{append && <span className="hpay-input-group-text">{append}</span>}
				</div>

				{help && <div className="hpay-form-text hpay-text-muted">{help}</div>}
			</div>
		</div>
	);

}
