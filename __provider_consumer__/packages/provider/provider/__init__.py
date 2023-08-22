from typing import Any, Dict, List

from ._version import __version__


def _jupyter_labextension_paths() -> List[Dict[str, str]]:
    return [{
        'src': 'labextension',
        'dest': '@datalayer/example-ext-provider'
    }]
