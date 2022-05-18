import React, { useState } from 'react';

// Declaring type of props - see "Typing Component Props" for more examples
type TreeItemProps = {
  id: string;
  name: string;
  children?: TreeItemProps[];
}; /* use `interface` if exporting so that consumers can extend */

// Easiest way to declare a Function Component; return type is inferred.
const TreeItem = ({ id, name, children }: TreeItemProps) => {

	const [expanded, setExpanded] = useState(false);


	function toggleExpanded() {
		setExpanded(!expanded);
	}

	return (<li>
		<button style={{ background: 'none', border: 'none', padding: '1em' }} id={id} onClick={toggleExpanded}>
			<div style={{ display: 'inline-block', minWidth: '16px', padding: '2px 4px', lineHeight: '1.5' }}>{children && children.length ? (expanded ? '▼' : '▶') : ('•')}</div>
			{name}
		</button>
		{children && children.length && expanded && (
			<ul>
				{children.map((treeItem: TreeItemProps) => {
					return <TreeItem key={treeItem.id} {...treeItem} />;
				})}
			</ul>
		)}
	</li>);

};

export default TreeItem;
