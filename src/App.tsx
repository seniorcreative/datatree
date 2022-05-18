import React from 'react';
import './App.css';
import { fetchData } from './data/data';
import { useState } from 'react';
import TreeItem from './components/TreeItem';

type TreeItemType = {
  id: any,
  name: string,
  children?: TreeItemType[]
}

function App() {

	const [dataError, setDataError] = useState(false);
	const [treeItems, setTreeItems] = useState<TreeItemType[]|null>(null);

	fetchData()
		.then((data : any) => {
			console.log('got some data', data);
			setTreeItems(data);
		})
		.catch(error => {
			setDataError(true);
		});

	return (
		<div className="App">
			{ dataError && (
				<p>Error loading navigation data </p>
			)}

			<nav>
				{ treeItems ? (
					<ul>
						{treeItems.map((treeItem: TreeItemType) => (
							<TreeItem {...treeItem} />
						))}
					</ul>
				) : (
					<>Loading...</>
				) }
			</nav>

		</div>
	);
}

export default App;
