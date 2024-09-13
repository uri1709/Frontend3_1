import styles from './fieldLayout.module.css';

export function FieldLayout({fields, onClick}) {
	return (
		<div className={styles["field-container"]}>
			{fields.map((item, index) => {
				return (
					<div
						key={index}
						className={styles.field}
						onClick={() => onClick(index)}
					>
						{item}
					</div>
				)
			})}
		</div>
	);
}
