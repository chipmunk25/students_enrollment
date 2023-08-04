export const genders = [{ label: "Male", value: "Male", }, { label: "Female", value: "Female", },]
export const residencies = [{ label: "on-campus", value: "on_campus", }, { label: "off-campus", value: "off_campus", },]
export const statuses = [{ label: "Regular", value: "regular", }, { label: "Foreign", value: "foreign", }, { label: "Fee Paying", value: "fee_paying", }, { label: "Distance", value: "distance", },]
export const findLabel = (arr, key) => {
    return arr?.find(item => item.value === key)
}