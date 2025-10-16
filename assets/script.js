// Progress tracking with localStorage
function updateProgress() {
    const checkboxes = document.querySelectorAll('.topic-item input[type="checkbox"]');
    const total = checkboxes.length;
    let completed = 0;
    
    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            completed++;
            checkbox.parentElement.classList.add('completed');
            localStorage.setItem(`topic_${index}`, 'true');
        } else {
            checkbox.parentElement.classList.remove('completed');
            localStorage.setItem(`topic_${index}`, 'false');
        }
    });
    
    const percentage = Math.round((completed / total) * 100);
    document.getElementById('overall-progress').style.width = percentage + '%';
    document.getElementById('overall-progress').textContent = percentage + '%';
    document.getElementById('completed-count').textContent = completed;
    document.getElementById('total-count').textContent = total;
}

// Load saved progress on page load
window.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.topic-item input[type="checkbox"]');
    checkboxes.forEach((checkbox, index) => {
        const saved = localStorage.getItem(`topic_${index}`);
        if (saved === 'true') {
            checkbox.checked = true;
        }
    });
    updateProgress();
});

document.addEventListener('DOMContentLoaded', function () {
    var tocList = document.getElementById('toc-list');
    if (!tocList) {
        return;
    }

    tocList.textContent = '';

    var headings = document.querySelectorAll('.container h2, .container h3');
    var sections = [];
    var currentSection = null;

    function ensureId(element, text) {
        if (element.id) {
            return element.id;
        }

        var slug = text
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^\w\s-]/g, '')
            .trim()
            .replace(/\s+/g, '-');

        if (!slug) {
            return null;
        }

        var uniqueSlug = slug;
        var counter = 1;
        while (document.getElementById(uniqueSlug)) {
            uniqueSlug = slug + '-' + counter;
            counter += 1;
        }

        element.id = uniqueSlug;
        return uniqueSlug;
    }

    headings.forEach(function (heading) {
        var text = heading.textContent.trim();
        if (!text) {
            return;
        }

        var id = ensureId(heading, text);
        if (!id) {
            return;
        }

        if (heading.tagName === 'H2') {
            currentSection = {
                text: text,
                id: id,
                level: 'h2',
                children: []
            };
            sections.push(currentSection);
            return;
        }

        var childEntry = {
            text: text,
            id: id
        };

        if (currentSection) {
            currentSection.children.push(childEntry);
        } else {
            sections.push({
                text: text,
                id: id,
                level: 'h3',
                children: []
});
    }
});

var fragment = document.createDocumentFragment();

sections.forEach(function (section) {
    var li = document.createElement('li');
    var levelClass = section.level === 'h2' ? 'toc-level-2' : 'toc-level-3';
    li.className = 'toc-item ' + levelClass;

    var header = document.createElement('div');
    header.className = 'toc-item-header';

    var hasChildren = section.children && section.children.length > 0;

    if (hasChildren) {
        var toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'toc-toggle';
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Mo rong ' + section.text);
        toggle.textContent = '+';
        header.appendChild(toggle);
    }

    var link = document.createElement('a');
    link.href = '#' + section.id;
    link.textContent = section.text;
    header.appendChild(link);

    li.appendChild(header);

    if (hasChildren) {
        var sublist = document.createElement('ul');
        sublist.className = 'toc-sublist';

        section.children.forEach(function (child) {
            var childLi = document.createElement('li');
            childLi.className = 'toc-item toc-level-3';

            var childLink = document.createElement('a');
            childLink.href = '#' + child.id;
            childLink.textContent = child.text;

            childLi.appendChild(childLink);
            sublist.appendChild(childLi);
        });

        sublist.hidden = true;
        li.appendChild(sublist);
    }

    fragment.appendChild(li);
});

tocList.appendChild(fragment);

tocList.addEventListener('click', function (event) {
    var toggle = event.target.closest('.toc-toggle');
    if (!toggle) {
        return;
    }

    var parentItem = toggle.closest('.toc-item');
    if (!parentItem) {
        return;
    }

    var sublist = parentItem.querySelector('.toc-sublist');
    if (!sublist) {
        return;
    }

    var expanded = toggle.getAttribute('aria-expanded') === 'true';
    var newExpanded = !expanded;

    toggle.setAttribute('aria-expanded', newExpanded ? 'true' : 'false');
    toggle.textContent = newExpanded ? '-' : '+';

    var anchor = parentItem.querySelector('a');
    if (anchor) {
        toggle.setAttribute('aria-label', (newExpanded ? 'Thu gon ' : 'Mo rong ') + anchor.textContent);
    }

    sublist.hidden = !newExpanded;
});
        });


