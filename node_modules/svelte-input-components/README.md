[![npm](https://img.shields.io/npm/v/svelte-inputs)](https://www.npmjs.com/package/svelte-input-components)
[![install size](https://packagephobia.now.sh/badge?p=svelte-input-components)](https://packagephobia.now.sh/result?p=svelte-input-components)
![NPM](https://img.shields.io/npm/l/svelte-input-components)
![npm](https://img.shields.io/npm/dw/svelte-input-components)

# svelte-input-components

Basic Input Components with Svelte

[More Documentation](#)

## Contents:

- [Installation](#Installation)
- [Usage](#Usage)
- [Components](#Components)
- [Development](#Development)

## Background

`svelte-input-components` was made for myself. I found myself copying over the same elements over and over. So I made it a package

`svelte-input-component` requires `Svelte` >= 5.0.0
`svelte-input-component` requires `tailwind` = 3.0.0

# Usage

**Ex:**

```js
import {
    Checklist,
    ColorInput,
    DateInput,
    Label,
    RadioBox,
    RadioBoxList,
    Select,
    TextArea
    TextInput,
    Toggle,
 } from 'svelte-input-components';
```

# Components

## Checklist

A checklist of options

```js
<Checklist
	options={[
		{ id: '1', title: 'Option 1' },
		{ id: '2', title: 'Option 2' }
	]}
/>
```

## ColorInput

Take in an array of colors made to select colors

```js
<ColorInput
	id="color"
	label="Select A Color"
	groupName="colors"
	colors={[
		{ hex: '#FF5733', name: 'Sunset Orange' },
		{ hex: '#33FF57', name: 'Lime Green' },
		{ hex: '#3357FF', name: 'Royal Blue' }
	]}
/>
```

## DateInput

Selects a date

```js
<DateInput label="Date" id="date" />
```

## Label

A label for components

```js
<Label label="Label" id="labelID" />
```

## RadioBox

A checkbox that wraps the text

```js
<RadioBox
	label="Radio Box"
	id="radioBox"
	groupName="options"
	options={[
		{ id: '1', title: 'Option A', value: '1' },
		{ id: '2', title: 'Option B', value: '2' }
	]}
/>
```

## RadioList

A list of check items wrapped

```js
<RadioBoxList
	label="Radio Box List"
	id="radioBoxList"
	groupName="radioBoxList"
	options={[
		{ id: '1', title: 'Option A' },
		{ id: '2', title: 'Option B', checked: true },
		{ id: '3', title: 'Option C', subtitle: 'Subtitle C' }
	]}
/>
```

## Select

A select drop down component

```js
<Select
	id="select"
	label="Select"
	options={[
		{ id: 'select', label: 'Select an Option', selected: true },
		{ id: '1', label: 'Option 1' },
		{ id: '2', label: 'Option 2' }
	]}
/>
```

## TextArea

A large text area

```js
<TextArea id="textArea" label="Text Area" />
```

## TextInput

A basic text input

```js
<TextInput id="text" label="Text" />
```

## Toggle

A Toggle element

```js
<Toggle id="toggle" label="Checked" />
```

**Ex:**

```js
import { TextInput } from 'svelte-input-components';

<TextInput id="text" label="Text" />;
```

## Toggle

# Development

If you'd like to contribute to the development of this project and extend the `svelte-input-components`
library, please join us on GitHub!
