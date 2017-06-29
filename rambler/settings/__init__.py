from rambler.settings.base import *  # noqa


try:
    from rambler.settings.local import *  # noqa
except ImportError:
    pass
