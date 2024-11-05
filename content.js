if (typeof elements === 'undefined') {
    const elements = document.querySelectorAll('.widget_data-type_object > .widget-object__label, .widget_data-type_array > .widget-array__label');

    elements.forEach((element) => {
        const prefixDiv = document.createElement('div');

        prefixDiv.innerHTML = '< toggle >';
        prefixDiv.classList.add('bunkerozavr-switcher')
        prefixDiv.addEventListener('click', function (e) {
            let siblings = Array.prototype.filter.call(this.parentNode.parentNode.children, function (child) {
                return child !== e.target.parentNode;
            });

            siblings.forEach(function (sibling) {
                sibling.classList.toggle('bunkerozavr-hide');
            });
        });

        element.insertBefore(prefixDiv, element.firstChild);
    });
}
