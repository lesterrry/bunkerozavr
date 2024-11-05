console.info('BUNKEROZAVR!');

if (typeof elements === 'undefined') {
    const elements = document.querySelectorAll('.widget_data-type_object > .widget-object__label, .widget_data-type_array > .widget-array__label');

    const CLASS = 'bunkerozavr-switcher';

    elements.forEach((element) => {
        const prefixDiv = document.createElement('div');

        const firstChild = element.firstChild;

        if (firstChild.classList.contains(CLASS)) return;

        prefixDiv.innerHTML = '( toggle )';
        prefixDiv.classList.add(CLASS);
        prefixDiv.addEventListener('click', function (e) {
            let siblings = this.parentNode.parentNode.children;
            for (let i = 0; i < siblings.length; i++) {
                if (siblings[i] !== e.target.parentNode) {
                    siblings[i].classList.toggle('bunkerozavr-hide');
                }
            }
        });

        element.insertBefore(prefixDiv, firstChild);
    });
}
