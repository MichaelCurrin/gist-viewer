const FilterInput = {
  name: "FilterInput",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  template: `
    <div>
      <label for="filter-input">
        Search descriptions:
      </label>

      <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
    </div>
  `,
};

export default FilterInput;
