export const ModuleTemplate = `
import * as r from '@spcy/lib.core.reflection';
{{#if isEmpty}}
{{else}}
import * as m from './{{moduleFileName}}';
{{/if}}
{{#each exports}}
import { {{importName}}Module as {{aliasName}}Module, Types as {{aliasName}}Types } from '{{fileName}}';
{{/each}}

const PackageName = '{{module.$id}}';

{{#each module.$defs}}
const {{@key}}Type: r.TypeInfo = {{stringify .}};
const {{@key}}: r.Prototype<m.{{@key}}> = { 
  id: {{@key}}Type.$id,
  package: PackageName,
  typeInfo: {{@key}}Type,
}
{{/each}}

export const {{moduleName}}Module: r.Module = {
  $id: PackageName,
  $defs: {
{{#each module.$defs}}
    {{@key}}: {{@key}}Type,
{{/each}}
{{#each exports}}
    ...{{aliasName}}Module.$defs,
{{/each}}
  }
};

export const Types = {
{{#each module.$defs}}
    {{@key}},
{{/each}}
{{#each exports}}
    ...{{aliasName}}Types,
{{/each}}
};
`;
